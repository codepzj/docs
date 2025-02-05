# air 实现热重载

用`fresh`用腻了，想使用`air`尝尝鲜，上`Github`一看，`air`的知名度比`fresh`高很多，于是直接开始吧。

由于最新版本的`air`需要的go版本是`1.23.5`，我的版本不能达标，于是使用比较低的版本`v1.52.3`(适配go 1.22)

## 直接安装

> **项目地址：https://github.com/air-verse/air**

```bash
go install github.com/air-verse/air@v1.52.3
```

## 开始使用

### 初始化

```go
air init
```

然后项目根目录就会多出一个`.air.toml`

### 修改配置文件

#### 编译位置

```toml
cmd = "go build -o ./tmp/main.exe ./cmd/." # 根据main.go所在位置修改，如果为根目录设置为'.',当前main.go位于cmd文件夹中
```

#### 退出air删除exe

```toml
[misc]
  clean_on_exit = true # 在退出air的时候删除编译的exe
```

#### 完整配置文件

```toml
root = "."
testdata_dir = "testdata"
tmp_dir = "tmp"

[build]
  args_bin = []
  bin = "tmp\\main.exe"
  cmd = "go build -o ./tmp/main.exe ./cmd/." # 根据main.go所在位置修改，如果为根目录设置为'.',当前main.go位于cmd文件夹中
  delay = 1000
  exclude_dir = ["assets", "tmp", "vendor", "testdata"]
  exclude_file = []
  exclude_regex = ["_test.go"]
  exclude_unchanged = false
  follow_symlink = false
  full_bin = ""
  include_dir = []
  include_ext = ["go", "tpl", "tmpl", "html"]
  include_file = []
  kill_delay = "0s"
  log = "build-errors.log"
  poll = false
  poll_interval = 0
  post_cmd = []
  pre_cmd = []
  rerun = false
  rerun_delay = 500
  send_interrupt = false
  stop_on_error = false

[color]
  app = ""
  build = "yellow"
  main = "magenta"
  runner = "green"
  watcher = "cyan"

[log]
  main_only = false
  time = false

[misc]
  clean_on_exit = true # 在退出air的时候删除编译的exe

[proxy]
  app_port = 0
  enabled = false
  proxy_port = 0

[screen]
  clear_on_rebuild = false
  keep_scroll = true
```

### 运行

```bash
air # 默认直接读取.air.toml的配置
```

```bash
air -c config.toml # 指定配置文件
```