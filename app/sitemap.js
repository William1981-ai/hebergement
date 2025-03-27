import inventaire from '@/data/inventaire.json'

/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    let sitemap = [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/apropos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: 'http://localhost:3000/gallerie',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/form',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/magasin',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        }
    ];

    sitemap = sitemap.concat(inventaire.map((item) => ({
        url: `http://localhost:3000/magasin/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    })));

    return sitemap;
}