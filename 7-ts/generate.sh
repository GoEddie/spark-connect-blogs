cd src/proto
mkdir -p ../generated
protoc --plugin=../../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=../generated ./spark/connect/*.proto 
cd ../generated/google/protobuf 
pwd
read test
tsc any.ts 
cd ../../spark/connect 

node --max-old-space-size=8192 /usr/local/bin/tsc ./common.ts --diagnostics
node --max-old-space-size=8192 /usr/local/bin/tsc ./base.ts --diagnostics
node --max-old-space-size=8192 /usr/local/bin/tsc ./catalog.ts --diagnostics
node --max-old-space-size=8192 /usr/local/bin/tsc ./commands.ts --diagnostics
node --max-old-space-size=8192 /usr/local/bin/tsc ./expressions.ts --diagnostics
node --max-old-space-size=8192 /usr/local/bin/tsc ./relations.ts --diagnostics
node --max-old-space-size=8192 /usr/local/bin/tsc ./types.ts --diagnostics