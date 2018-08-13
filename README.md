# knative-sample-app
the sample golang http server from [Orchestrating a source-to-URL deployment on Kubernetes](https://github.com/knative/docs/tree/master/serving/samples/source-to-url-go) takes to long to build beacause it pulls a golang image(which is huge) every time.

this simple nodejs app act as a replace using a much smaller nodejs image(mhart/alpine-node) as a base.

## local build and test
```
docker build -t {IMAGE_NAME} .
docker run --rm -p 8080:8080 {IMAGE_NAME}
```

