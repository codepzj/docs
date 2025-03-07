# SQL 构建器

## 原生 SQL

原生查询 SQL 和  `Scan`

```go
type Result struct {
    ID   int
    Name string
    Age  int
}

var result Result
db.Raw("SELECT id, name, age FROM users WHERE id = ?", 3).Scan(&result)

var age int
db.Raw("select sum(age) from users where role = ?", "admin").Scan(&age)
```

`Exec`  原生 SQL

```go
db.Exec("DROP TABLE users")
db.Exec("UPDATE orders SET shipped_at=? WHERE id IN ?", time.Now(), []int64{1,2,3})

// Exec SQL 表达式
db.Exec("update users set money=? where name = ?", gorm.Expr("money * ? + ?", 10000, 1), "jinzhu")
```

> **注意** GORM 允许缓存预编译 SQL 语句来提高性能，查看  [性能](https://gorm.io/zh_CN/docs/performance.html)  获取详情

## 命名参数

GORM 支持  `sql.NamedArg`、`map[string]interface{}{}`  或 struct 形式的命名参数，例如：

```go
db.Where("name1 = @name OR name2 = @name", sql.Named("name", "jinzhu")).Find(&user)
// SELECT * FROM `users` WHERE name1 = "jinzhu" OR name2 = "jinzhu"

db.Where("name1 = @name OR name2 = @name", map[string]interface{}{"name": "jinzhu2"}).First(&result3)
// SELECT * FROM `users` WHERE name1 = "jinzhu2" OR name2 = "jinzhu2" ORDER BY `users`.`id` LIMIT 1

// 原生 SQL 及命名参数
db.Raw("SELECT * FROM users WHERE name1 = @name OR name2 = @name2 OR name3 = @name",
       sql.Named("name", "jinzhu1"), sql.Named("name2", "jinzhu2")).Find(&user)
// SELECT * FROM users WHERE name1 = "jinzhu1" OR name2 = "jinzhu2" OR name3 = "jinzhu1"

db.Exec("UPDATE users SET name1 = @name, name2 = @name2, name3 = @name",
        sql.Named("name", "jinzhunew"), sql.Named("name2", "jinzhunew2"))
// UPDATE users SET name1 = "jinzhunew", name2 = "jinzhunew2", name3 = "jinzhunew"

db.Raw("SELECT * FROM users WHERE (name1 = @name AND name3 = @name) AND name2 = @name2",
       map[string]interface{}{"name": "jinzhu", "name2": "jinzhu2"}).Find(&user)
// SELECT * FROM users WHERE (name1 = "jinzhu" AND name3 = "jinzhu") AND name2 = "jinzhu2"

type NamedArgument struct {
    Name string
    Name2 string
}

db.Raw("SELECT * FROM users WHERE (name1 = @Name AND name3 = @Name) AND name2 = @Name2",
       NamedArgument{Name: "jinzhu", Name2: "jinzhu2"}).Find(&user)
// SELECT * FROM users WHERE (name1 = "jinzhu" AND name3 = "jinzhu") AND name2 = "jinzhu2"
```

## DryRun 模式

在不执行的情况下生成  `SQL` ，可以用于准备或测试生成的 SQL，详情请参考  [Session](https://gorm.io/zh_CN/docs/session.html)

```go
stmt := db.Session(&Session{DryRun: true}).First(&user, 1).Statement
stmt.SQL.String() //=> SELECT * FROM `users` WHERE `id` = $1 ORDER BY `id`
stmt.Vars         //=> []interface{}{1}
```

## `Row` & `Rows`

获取  `*sql.Row`  结果

```go
// 使用 GORM API 构建 SQL
row := db.Table("users").Where("name = ?", "jinzhu").Select("name", "age").Row()
row.Scan(&name, &age)

// 使用原生 SQL
row := db.Raw("select name, age, email from users where name = ?", "jinzhu").Row()
row.Scan(&name, &age, &email)
```

获取  `*sql.Rows`  结果

```go
// 使用 GORM API 构建 SQL
rows, err := db.Model(&User{}).Where("name = ?", "jinzhu").Select("name, age, email").Rows()
defer rows.Close()
for rows.Next() {
    rows.Scan(&name, &age, &email)

    // 业务逻辑...
}

// 原生 SQL
rows, err := db.Raw("select name, age, email from users where name = ?", "jinzhu").Rows()
defer rows.Close()
for rows.Next() {
    rows.Scan(&name, &age, &email)

    // 业务逻辑...
}
```

转到  [FindInBatches](https://gorm.io/zh_CN/docs/advanced_query.html)  获取如何在批量中查询和处理记录的信息， 转到  [Group 条件](https://gorm.io/zh_CN/docs/advanced_query.html#group_conditions)  获取如何构建复杂 SQL 查询的信息

## 将  `sql.Rows`  扫描至 model

使用  `ScanRows`  将一行记录扫描至 struct，例如：

```go
rows, err := db.Model(&User{}).Where("name = ?", "jinzhu").Select("name, age, email").Rows() // (*sql.Rows, error)
defer rows.Close()

var user User
for rows.Next() {
    // ScanRows 将一行扫描至 user
    db.ScanRows(rows, &user)

    // 业务逻辑...
}
```

## 高级

### 子句（Clause）

GORM 内部使用 SQL builder 生成 SQL。对于每个操作，GORM 都会创建一个  `*gorm.Statement`  对象，所有的 GORM API 都是在为  `statement`  添加/修改  `Clause`，最后，GORM 会根据这些 Clause 生成 SQL

例如，当通过  `First`  进行查询时，它会在  `Statement`  中添加以下 Clause

```go
clause.Select{Columns: "*"}
clause.From{Tables: clause.CurrentTable}
clause.Limit{Limit: 1}
clause.OrderByColumn{
    Column: clause.Column{Table: clause.CurrentTable, Name: clause.PrimaryKey},
}
```

然后 GORM 在  `Query` callback 中构建最终的查询 SQL，像这样：

```go
Statement.Build("SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "LIMIT", "FOR")
```

生成 SQL：

```go
SELECT * FROM `users` ORDER BY `users`.`id` LIMIT 1
```

您可以自定义  `Clause`  并与 GORM 一起使用，这需要实现  [Interface](https://pkg.go.dev/gorm.io/gorm/clause?tab=doc#Interface)  接口

可以参考  [示例](https://github.com/go-gorm/gorm/tree/master/clause)

### 子句构造器

不同的数据库, Clause 可能会生成不同的 SQL，例如：

```go
db.Offset(10).Limit(5).Find(&users)
// SQL Server 会生成
// SELECT * FROM "users" OFFSET 10 ROW FETCH NEXT 5 ROWS ONLY
// MySQL 会生成
// SELECT * FROM `users` LIMIT 5 OFFSET 10
```

之所以支持 Clause，是因为 GORM 允许数据库驱动程序通过注册 Clause Builder 来取代默认值，这儿有一个  [Limit](https://github.com/go-gorm/sqlserver/blob/512546241200023819d2e7f8f2f91d7fb3a52e42/sqlserver.go#L45)  的示例

### 子句选项

GORM 定义了很多  [Clause](https://github.com/go-gorm/gorm/tree/master/clause)，其中一些 Clause 提供了你可能会用到的选项

尽管很少会用到它们，但如果你发现 GORM API 与你的预期不符合。这可能可以很好地检查它们，例如：

```go
db.Clauses(clause.Insert{Modifier: "IGNORE"}).Create(&user)
// INSERT IGNORE INTO users (name,age...) VALUES ("jinzhu",18...);
```

### StatementModifier

GORM 提供了  [StatementModifier](https://pkg.go.dev/gorm.io/gorm?tab=doc#StatementModifier)  接口，允许您修改语句，使其符合您的要求，这儿有一个  [Hint](https://gorm.io/zh_CN/docs/hints.html)  示例

```go
import "gorm.io/hints"

db.Clauses(hints.New("hint")).Find(&User{})
// SELECT * /*+ hint */ FROM `users`
```
