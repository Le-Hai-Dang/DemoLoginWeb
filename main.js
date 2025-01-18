window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'),
        { theme: 'outline', size: 'large' }
    );
    google.accounts.id.prompt(); 
};

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data);

   
    if (data.email === 'admin@example.com') {
        console.log('Admin logged in');
      
    } else {
        console.log('User logged in');
        
    }
}