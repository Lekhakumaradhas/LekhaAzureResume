window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://azure-resume-app.azurewebsites.net/api/GetResumeCounter?code=K1ocRh28muc6QYLj6fj57M6_7MsywKSMBmw_6yuNZVbnAzFudvYFmw==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl, {
        method: "POST"
    })
        .then(response => {
            fetch(functionApiUrl).then(response => {
                return response.json()
            }).then(response => {
                console.log("Website called function API.");
                count = response.count;
                document.getElementById("counter").innerText = count;
            }).catch(function (error) {
                console.log(error);
            });
            return count;

        });

}