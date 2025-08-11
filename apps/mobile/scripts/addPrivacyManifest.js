const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'node_modules', 'react-native', 'ReactCommon', 'cxxreact', 'PrivacyInfo.xcprivacy');

if (!fs.existsSync(manifestPath)) {
  const content = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict/>\n</plist>\n`;
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, content, 'utf8');
  console.log('Created React Native PrivacyInfo.xcprivacy');
} else {
  console.log('React Native PrivacyInfo.xcprivacy already exists');
}
