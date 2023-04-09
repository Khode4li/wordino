cp -r ../src/ .
docker build -t wordino:1.0 -f SDockerfile .
rm -rf src
