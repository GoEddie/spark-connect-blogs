#!/bin/bash
# Copyright 2017 gRPC authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

cd $(dirname $0)/../..

# protoc and grpc_*_plugin binaries can be obtained by running
# $ bazel build @com_google_protobuf//:protoc //src/compiler:all
PROTOC=bazel-bin/external/com_google_protobuf/protoc
PLUGIN=protoc-gen-grpc=bazel-bin/src/compiler/grpc_php_plugin


$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/spark/connect/common.proto

$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/spark/connect/commands.proto

$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/spark/connect/catalog.proto

$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/spark/connect/expressions.proto

$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/spark/connect/relations.proto

$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/spark/connect/types.proto


$PROTOC --proto_path=examples/php-spark/proto \
       --php_out=examples/php-spark/ \
       --grpc_out=generate_server:examples/php-spark/ \
       --plugin=$PLUGIN examples/php-spark/proto/base.proto
