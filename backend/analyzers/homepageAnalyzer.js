function homepageAnalyzer(html){
    const issues=[];
    const meta= {};

    if (!html.includes("<title>")) {
    issues.push("Missing <title> tag");
    }

    if (!html.includes('meta name="description"')) {
    issues.push("Missing meta description");
    }
    if (!html.match(/<h1[^>]*>/)) {
    issues.push("Missing H1 heading");
  }

  meta.length = html.length;

  return { issues, meta };
}

export default homepageAnalyzer;