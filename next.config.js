module.exports = {
    async redirects() {
        return [
            {
                source: '/archives/v:ver',
                destination: '/archives/v:ver/index.html',
                permanent: true
            }
        ]
    }
}