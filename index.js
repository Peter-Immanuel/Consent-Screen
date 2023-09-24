function findUrlParameter(parameterName) {
    let result = null;
    // clean link of all #
    var cleanedLink = location.href.replace("#","&")
    const searchParams = new URLSearchParams(cleanedLink);
    if (searchParams.has(parameterName)) {
      result = searchParams.get(parameterName);
    }
    return result;
  }
  
function redirectToDesktop() {
    const idToken = findUrlParameter("id_token");
    const accessToken = findUrlParameter("access_token");
    const appLinkScheme = "EmailSender";
    const appLinkAuthority = "app.emailsender.com";
    const appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?id_token=${idToken}&access_token=${accessToken}`;
    console.log(appLinkUrl)
    setTimeout(() => {
        window.location.href = appLinkUrl;
    }, 100);
}