module.exports = function (req, res) {
    if (!req.body.phone) {
        return res.status(422).send({ error: 'You must provide a phone number' });
    }

    // Format the phone number to remove dashes and parens
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    admin.auth().getUser(phone);
        .then(userRecord => {

        });


}
