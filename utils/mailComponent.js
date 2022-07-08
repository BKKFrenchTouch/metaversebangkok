const url = process.env.API_URL;
const token = `api:${process.env.API_KEY}`;

let getBody = (data) => { 
    const body = ''
    for(let key in data){
        body += (key != 'message') ? `${String(key)}: ${data[key]}\n` : `${String(key)}:\n${data[key]}`
    }
    return body
}

let formatMail = (formdata) => {
    const body = getBody(formdata)
    const data = {
        'from': `metaversebkk@${process.env.DOMAIN}`,
        'to': `test@${process.env.DOMAIN}`,
        'cc': formdata.Email,
        'subject': "Metaverses Bangkok",
        'text': body
    }
    return data;
}

let sendMail = async (data) => {
    let success = true;
    try {
        let resp = await fetch(url, {
            method: 'POST',
            body: new URLSearchParams(data),
            headers : {
                'Authorization': `Basic ${Buffer.from(String(token)).toString('base64')}`
            }
        });
        if(resp.status != 200){
            success = false;
        }
    } catch (error) {
        success = false;
    }
    return success;
}
export {formatMail, sendMail};