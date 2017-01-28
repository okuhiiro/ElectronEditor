const path = require('path');

const pkg = require('../package.json');

// アプリケーションのデータパスを取得する
// win32 → C:\Users\okuhiiro\AppData\Roaming\<package name>
// darwin →
// linux →
function getAppDataPath(platform)
{
    var appDataPath;
    switch (platform) {
        case 'win32':
            if (process.env['APPDATA'])
            {
                appDataPath = process.env['APPDATA'];
            }
            else
            {
                appDataPath = path.join(
                    process.env['USERPROFILE'],
                    'AppData',
                    'Roaming'
                );
            }
            break;
        case 'darwin':
            break;

        case 'linux':
            break;

        default:
            throw new Error('Platform Not Supported');
    }

    return path.join(appDataPath, pkg.name);
}

exports.getAppDataPath = getAppDataPath;
