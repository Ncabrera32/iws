export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Here you could integrate with an email service to send the message
        console.log('Received message:', { name, email, message });

        // Respond with success status
        res.status(200).json({ status: 'Success', message: 'Message received' });
    } else {
        // Only POST method is accepted
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
