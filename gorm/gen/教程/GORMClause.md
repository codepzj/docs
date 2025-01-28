# GORM Clause

Gen 也支持 GORM Clauses，其使用类似于 Gorm。

## Upsert

Gen 为不同数据库提供兼容的 Upsert 支持 [就像 GORM](../docs/create.html#upsert)

```go
u := query.User

user := model.User{Name: "Modi", Age: 18, Birthday: time.Now()}

u.Save(&model)
// equal to
u.Clauses(clause.OnConflict{UpdateAll: true}).Create(value).Error
```

## Hints

优化器提示用于控制查询优化器选择某个查询执行计划，Gen 通过 [gorm.io/hints](docs_hints) 提供支持，例如：

```go
import "gorm.io/hints"

u := query.Use(db).User

users, err := u.WithContext(ctx).Clauses(hints.New("MAX_EXECUTION_TIME(10000)")).Find()
// SELECT * /*+ MAX_EXECUTION_TIME(10000) */ FROM `users`
```

Index hints 允许指定查询使用的索引

```go
import "gorm.io/hints"

u := query.Use(db).User

users, err := u.WithContext(ctx).Clauses(hints.UseIndex("idx_user_name")).Find()
// SELECT * FROM `users` USE INDEX (`idx_user_name`)

users, err := u.WithContext(ctx).Clauses(hints.ForceIndex("idx_user_name", "idx_user_id").ForJoin()).Find()
// SELECT * FROM `users` FORCE INDEX FOR JOIN (`idx_user_name`,`idx_user_id`)"
```
