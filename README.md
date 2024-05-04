# meet TGTW


http:
  routers:
    main:
      tls: {}
      rule: Host(`meet.mobifone.vn`) && PathPrefix(`/m`)
      service: main
    payment:
      tls: {}
      rule: Host(`meet.mobifone.vn`) && PathPrefix(`/api/payment/vnpay`)
      service: payment
    landing-page:
      tls: {}
      rule: Host(`meet.mobifone.vn`)
      service: landing-page
    landing-page-longpolling:
      tls: {}
      rule: Host(`meet.mobifone.vn`) && Path(`/longpolling`)
      service: landing-page-longpolling
  services:
    main:
      loadBalancer:
        servers:
          - url: "http://10.38.76.80:8002"
    payment:
      loadBalancer:
        servers:
          - url: "http://10.38.76.80:8000"
    landing-page:
      loadBalancer:
        servers:
          - url: "http://10.38.76.80:8006"
    landing-page-longpolling:
      loadBalancer:
        servers:
          - url: "http://10.38.76.80:8007"
