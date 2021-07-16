
export const settings = {
    header : {
        title : 'Web Store Settings',
        subtitle : 'Here is your basic store setting of your website.',
    },
    body : [
        {
            title : 'Store Name',
            subtitle : 'Specify the name of your website.',
            form :  'input',
            name : 'storeName'
        },
        {
            title : 'Store Email',
            subtitle : 'Specify the email address of your website.',
            form :  'email',
            name : 'storeEmail'
        },
        {
            title : 'Site Copyright',
            subtitle : 'Copyright information of your website.',
            form :  'input',
            name : 'siteCopyright'
        },
        {
            title : 'Allow Registration',
            subtitle : 'Enable or disable registration from site.',
            form :  'radioButton'
        },
        {
            title : 'Main Website',
            subtitle : 'Specify the URL if your main website is external.',
            form :  'input',
            name : 'mainWebsite'
        },
        {
            title : 'Maintanance Mode',
            subtitle : 'Enable to make website make offline.',
            form :  'toggle'
        },
    ]
}
