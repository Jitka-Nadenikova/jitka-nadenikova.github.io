function changeLanguage(language) {
  // Define the language-specific file names
  const swedishFileName = 'index.html';
  const englishFileName = 'english.html';

  // Check the current file name
  const currentFileName = window.location.pathname.split('/').pop();

  // Check if the language is already set to the desired language
  if ((language === 'swedish' && currentFileName === swedishFileName) ||
      (language === 'english' && currentFileName === englishFileName)) {
    return;
  }

  // Determine the new file name based on the desired language
  const newFileName = (language === 'swedish') ? swedishFileName : englishFileName;

  // Build the new URL
  const newURL = window.location.origin + '/' + newFileName;

  // Redirect to the new URL
  window.location.href = newURL;
}
