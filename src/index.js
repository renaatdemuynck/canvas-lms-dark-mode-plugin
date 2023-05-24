import t from './i18n';

import './index.css';


export default function () {
    return {
        ...require('../package.json'),
        title: t('package.title'),
        description: t('package.description')
    };
}
