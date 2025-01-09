---
hidden: true
outline: deep
---

# Go 泛型

泛型编程为 Go 提供了抽象通用逻辑的能力，减少冗余代码，提升代码的维护性和可读性。以下是 Go 泛型的高级应用，适合具有研究背景的读者。

### 泛型加法函数

在传统编程中，针对不同类型的数据需编写多个函数，如：

```go
func AddInt(a int, b int) int {
	return a + b
}

func AddFloat(a float64, b float64) float64 {
	return a + b
}
```

使用泛型后，这些函数可简化为：

```go
func Add[T int | float64](a T, b T) T {
	return a + b
}
```

### 自定义类型约束

通过定义类型约束接口，我们能更精确地控制泛型函数的类型范围：

```go
type Numeric interface {
	int | int8 | int16 | int32 | int64 | float32 | float64
}

func Add[T Numeric](a T, b T) T {
	return a + b
}
```

### 标准库约束

Go 标准库 `constraints` 包提供了预定义的类型约束，如 `constraints.Integer` 和 `constraints.Float`，简化泛型函数的编写并提高类型安全性。

```go
func Add[T constraints.Integer | constraints.Float](a T, b T) T {
	return a + b
}
```

### 类型推导符 `~`

`~` 运算符用于匹配底层类型，允许泛型参数的底层类型与指定类型一致。

```go
func Add[T ~int | ~float64](a T, b T) T {
	return a + b
}
```

### 泛型结构体

泛型不仅适用于函数，还可用于定义结构体，支持不同数据类型：

```go
type Student[T constraints.Ordered] struct {
	Name string
	Age  int
	Msg  T
}
```

### 泛型映射

使用泛型定义自定义映射类型，可创建键和值具有特定类型约束的映射：

```go
type CustomMap[K comparable, V constraints.Ordered] map[K]V
```

### 泛型函数

泛型函数可接受列表和映射函数，返回新列表：

```go
func MapValues[T constraints.Integer](list []T, mapFunc func(num T) T) []T {
	var newList []T
	for _, v := range list {
		newList = append(newList, mapFunc(v))
	}
	return newList
}
```

此类泛型函数在数据处理和算法实现中尤为有用，减少了重复代码，提升了代码的抽象性。

