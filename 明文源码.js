addEventListener(
    "fetch",event => {
        let url=new URL(event.request.url);
        url.hostname='jj.377737.xyz';
        url.protocol='http';
     let request=new Request(url,event.request);
     event.respondWith(
          fetch(request)
        )
    }
)