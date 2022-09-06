const CON_getUserbyID = ({ getUserbyID }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}} = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          id: httpRequest.params.id,
        };
        // console.log(toView);
        const view = await getUserbyID(toView);

        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { view },
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      }
    };
  };
  
  module.exports = CON_getUserbyID;