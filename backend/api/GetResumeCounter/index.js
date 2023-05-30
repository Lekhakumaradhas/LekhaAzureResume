module.exports = async function (context, req, counter) {
    if (!counter) {
        context.log("Counter not found");
    }
/* Check if the method is POST */    
    else {
        if (req.method == 'POST') {
            counter.count = counter.count + 1;
            context.log("Post method triggered");
            context.bindings.counterupd = JSON.stringify({
                id: "1",
                count: counter.count
            });
            context.res = {
                status: 200,
                body: "Counter updated"
            }
        } else {
            context.res = {
                status: 200,
                body: {
                    "count": counter.count
                }
            }
        }

    }
};

