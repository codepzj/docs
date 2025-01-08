---
hidden: true
---

# go-redis 学习

::: details 一些废话

本来学校有项目需要用到 redis，但是我当时不会，只是听过，然后没用，如今来学习一下。

因为原本的电脑 windows 上是装了 redis 的，现在坏了，使用 docker 重新拉取一个

:::

## docker 部署 redis

```yaml
version: "3.9"
services:
  redis:
    image: redis:latest
    container_name: redis
    ports:
      - "6379:6379"
    volumes:
      - ./data:/data
      - ./conf/redis.conf:/etc/redis/redis.conf # https://redis.io/docs/management/config-file/
      - ./logs:/logs
    command: redis-server /etc/redis/redis.conf
```

**redis.conf:**

```bash
# Redis 服务器的端口号（默认：6379）
port 6379

# 绑定的 IP 地址，如果设置为 127.0.0.1，则只能本地访问；若设置为 0.0.0.0，则监听所有接口（默认：127.0.0.1）
bind 0.0.0.0

# 设置密码，客户端连接时需要提供密码才能进行操作，如果不设置密码，可以注释掉此行（默认：无）
# requirepass foobared
requirepass 123456

# 设置在客户端闲置一段时间后关闭连接，单位为秒（默认：0，表示禁用）
# timeout 0

# 是否以守护进程（daemon）模式运行，默认为 "no"，设置为 "yes" 后 Redis 会在后台运行
daemonize no

# 设置日志级别（默认：notice）。可以是 debug、verbose、notice、warning
loglevel notice

# 设置日志文件的路径（默认：空字符串），如果不设置，日志会输出到标准输出
logfile ""

# 设置数据库数量（默认：16），Redis 使用数据库索引从 0 到 15
databases 16

# 是否启用 AOF 持久化，默认为 "no"。如果设置为 "yes"，将在每个写操作执行时将其追加到文件中
appendonly no

# 设置 AOF 持久化的文件路径（默认：appendonly.aof）
# appendfilename "appendonly.aof"

# AOF 持久化模式，默认为 "always"。可以是 always、everysec 或 no
# always：每个写操作都立即同步到磁盘
# everysec：每秒钟同步一次到磁盘
# no：完全依赖操作系统的行为，可能会丢失数据，但性能最高
# appendfsync always

# 设置是否在后台进行 AOF 文件重写，默认为 "no"
# auto-aof-rewrite-on-rewrite no

# 设置 AOF 文件重写触发时，原 AOF 文件大小与新 AOF 文件大小之间的比率（默认：100）
# auto-aof-rewrite-percentage 100

# 设置是否开启 RDB 持久化，默认为 "yes"。如果设置为 "no"，禁用 RDB 持久化功能
save 900 1
save 300 10
save 60 10000

# 设置 RDB 持久化文件的名称（默认：dump.rdb）
# dbfilename dump.rdb

# 设置 RDB 持久化文件的保存路径，默认保存在当前目录
# dir ./

# 设置是否开启对主从同步的支持，默认为 "no"
# slaveof <masterip> <masterport>

# 设置主从同步时是否进行数据完整性校验，默认为 "yes"
# repl-diskless-sync no

# 设置在复制时是否进行异步复制，默认为 "yes"，可以加快复制速度，但会增加数据丢失的风险
# repl-backlog-size 1mb

# 设置是否开启集群模式（cluster mode），默认为 "no"
# cluster-enabled no

# 设置集群中的节点超时时间（默认：15000毫秒）
# cluster-node-timeout 15000

# 设置集群中节点间通信使用的端口号（默认：0）
# cluster-announce-port 0

# 设置集群中节点间通信使用的 IP 地址
# cluster-announce-ip 127.0.0.1

# 设置是否开启慢查询日志，默认为 "no"
# slowlog-log-slower-than 10000

# 设置慢查询日志的最大长度，默认为 128
# slowlog-max-len 128

# 设置每秒最大处理的写入命令数量，用于保护 Redis 服务器不被超负荷写入（默认：0，表示不限制）
# maxclients 10000

# 设置最大连接客户端数量（默认：10000，0 表示不限制）
# maxmemory <bytes>

# 设置最大使用内存的策略（默认：noeviction）。可以是 volatile-lru、allkeys-lru、volatile-random、allkeys-random、volatile-ttl 或 noeviction
# maxmemory-policy noeviction

# 设置允许最大使用内存的比例（默认：0），设置为 0 表示禁用
# maxmemory-samples 5
```

一些 redis 的前置知识

```bash
redis-cli # 进入数据库
AUTH 123456 # 登录
CONFIG GET * # 获取所有配置
```

## 快速开始

https://www.youtube.com/watch?v=1C3Ym_JjkMw

```go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
)

type PersonInfo struct {
	Name  string `json:"name,omitempty"`
	Age   int    `json:"age,omitempty"`
	Score int    `json:"score"`
}

func main() {
	ctx := context.Background()
	rdb := redis.NewClient(&redis.Options{
		Addr:     "127.0.0.1:6379",
		Password: "123456",
		DB:       0,
	})
	result, err := rdb.Ping(ctx).Result()
	if err != nil {
		fmt.Printf("数据库连接失败，%s", err.Error())
		return
	}
	fmt.Println(result)
	person := PersonInfo{
		Name:  "codepzj",
		Age:   20,
		Score: 100,
	}
	jsonBytes, _ := json.Marshal(person)
	personId := uuid.NewString()
	personKey := fmt.Sprintf("person:%s", personId)
	// 设置key值
	if _, err := rdb.Set(ctx, personKey, string(jsonBytes), 0).Result(); err != nil {
		fmt.Println("无法置入key", err.Error())
		return
	}
	//  获取key值
	personInfo, err := rdb.Get(ctx, personKey).Result()
	if err != nil {
		fmt.Println("获取key值失败", err.Error())
		return
	}
	fmt.Printf("获取到key(%s)的值为：%s", personKey, personInfo)
}
```

这个教程简洁明了，可以存储复杂结构，用 json.Marshal 将结构体转为 json 字符串存到 redis 当中，根据动态生成的 key 值存入 redis，比较符合业务要求
