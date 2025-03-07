# Belongs To

## Belongs To

`belongs to`  会与另一个模型建立了一对一的连接。 这种模型的每一个实例都“属于”另一个模型的一个实例。

例如，您的应用包含 user 和 company，并且每个 user 都可以分配给一个 company

```go
// `User` 属于 `Company`，`CompanyID` 是外键
type User struct {
    gorm.Model
    Name      string
    CompanyID int
    Company   Company
}

type Company struct {
    ID   int
    Name string
}
```

## 重写外键

要定义一个 belongs to 关系，必须存在外键，默认的外键使用拥有者的类型名加上主字段名

对于上面例子，定义属于  `Company`  的  `User`，其外键一般是  `CompanyID`

此外，GORM 还提供了一种自定义外键的方法，例如：

```go
type User struct {
    gorm.Model
    Name         string
    CompanyRefer int
    Company      Company `gorm:"foreignKey:CompanyRefer"`
    // 使用 CompanyRefer 作为外键
}

type Company struct {
    ID   int
    Name string
}
```

## 重写引用

对于 belongs to 关系，GORM 通常使用拥有者的主字段作为外键的值。 对于上面的例子，它是  `Company`  的  `ID`  字段

当您将 user 分配给某个 company 时，GORM 会将 company 的  `ID`  保存到用户的  `CompanyID`  字段

此外，您也可以使用标签  `references`  手动更改它，例如：

```go
type User struct {
    gorm.Model
    Name      string
    CompanyID string
    Company   Company `gorm:"references:Code"` // 使用 Code 作为引用
}

type Company struct {
    ID   int
    Code string
    Name string
}
```

## Belongs to 的 CRUD

查看  [关联模式](https://gorm.io/zh_CN/docs/associations.html#Association-Mode)  获取 belongs to 相关的用法

## 预加载

GORM 可以通过  `Preload`、`Joins`  预加载 belongs to 关联的记录，查看  [预加载](https://gorm.io/zh_CN/docs/preload.html)  获取详情

## 外键约束

你可以通过为标签  `constraint`  配置  `OnUpdate`、`OnDelete`  实现外键约束，在使用 GORM 进行迁移时它会被创建，例如：

```go
type User struct {
    gorm.Model
    Name      string
    CompanyID int
    Company   Company `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

type Company struct {
    ID   int
    Name string
}
```
