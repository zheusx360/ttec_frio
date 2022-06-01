const nodemailer = require('nodemailer')

export default async function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    auth: {
      user: 'ttec.orcamento@gmail.com',
      pass: ''
    }
  });

  await transporter.sendMail({
    from: 'ttec.orcamento@gmail.com',
    to: 'ttec.orcamento@gmail.com',
    subject: 'Nova solicitação de orçamento',
    text: '',
    html: `<h3>Nome: ${req.body.nome}</h3></br><h3>Telefone: ${req.body.fone}</h3></br><h3>Email: ${req.body.email}</h3></br><h3>${req.body.data}</h3></br><h3>Mensagem: </h3></br><h3>${req.body.text}</h3>`
  })
    .then(res.status(200).json({ message: "Email enviado com sucesso!" }))
    .catch(error => res.status(500).json({ message: `Erro ao enviar o email ${error}` }));
}
