const CON_getUser = ({ getUser }) =>{
    return async function get(httpRequest){

      const headers = {
        "Content-Type": "application/json",
      };

        try {
            //get the httprequest body
            const { source = {}, } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-Agent"];
            if (httpRequest.headers["Referer"]) {
              source.referrer = httpRequest.headers["Referer"];
            }

            // const accountId = req.params.id
   
           
            const view = await getUser();
           
            return {
              headers: {
                "Content-Type": "application/json"
              },
              statusCode: 200,
              body: { view }
            };
          } catch (e) {
            // TODO: Error logging
            console.log(e);
            if (e.name === "RangeError") {
              return {
                headers: {
                  "Content-Type": "application/json"
                },
                statusCode: 404,
                body: {
                  error: e.message
                }
              };
            }
            return {
              headers: {
                "Content-Type": "application/json"
              },
              statusCode: 400,
              body: {
                error: e.message
                
              }
            };
          }
    }
}
module.exports = CON_getUser