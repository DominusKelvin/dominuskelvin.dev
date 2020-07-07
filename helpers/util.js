import getShareImage from '@jlengstorf/get-share-image'
export default {
    getCard() {
        const socialImage = getShareImage({
            title: 'Kelvin Omereshone',
            tagline: "#web #javascript #node #testing",
            cloudName: 'dominuskelvin',
            imagePublicID: 'dominuskelvin.dev/card',
            font: 'futura',
            textColor: '7e8d85',
        })
        return socialImage
    }
}