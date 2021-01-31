var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
const Host = "smtp.elasticemail.com";
const Username = "var omited for security";
const Password = "/*variables omitted for security, will be done in prod*/";
const To = Username;
const From = To;
const Subject = "Reservation Request";
const getValues = () => {
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const from = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const comments = document.getElementById('comments').value ?? '---';
    return { name, guests, from, phone, date, time, comments, }
}
const fillTemplate = (name,  date, time ,guests, phone, from, comments) => {
   return  `${name} requested a reservation for ${date} at ${time} \n
    for ${guests} guests.
    phone number: ${phone} \n
    email: ${from} \n
    commments: ${comments || "---"}
    `;
}
function sendEmail(){
const {name , guests, from, phone, date, time, comments} = getValues();
const Body = fillTemplate(name,  date, time ,guests, phone, from, comments);
const email = { Host, Username, Password, To, From, Subject, Body};
Email.send(email).then(message => alert('Reservation confirmed. ')).catch(e => console.log(e));
}

