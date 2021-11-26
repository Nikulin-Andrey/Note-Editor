import React from "react";

export default function withFetch(Component) {
    class WithFetch extends React.Component {
        async fetchData(url, method = 'GET', id = '', body) {
            if (method === 'PUT' || method === 'POST') {
                await fetch(url + id, {
                    method: method,
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
                return;
            }
            const response = await fetch(url + id, {
                method: method
            });
            const data = await response.json();
            return data;
        }
        render () {
            return (
                <Component fetchData={this.fetchData} />
            )
        }
    }
    WithFetch.displayName = `WithFetch(${Component.displayName || Component.name || 'Component'})`;
    return WithFetch;

}