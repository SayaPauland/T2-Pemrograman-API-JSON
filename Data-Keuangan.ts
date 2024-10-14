let companies = [
    {
        id: 1,
        name: 'PT ABC',
        revenue: 500000000,  // in IDR
        profit: 100000000,   // in IDR
        expenses: 400000000, // in IDR
        industry: 'Technology',
        location: 'Jakarta',
        services: ['Software Development', 'IT Consulting'],
    },
    {
        id: 2,
        name: 'PT XYZ',
        revenue: 750000000,  // in IDR
        profit: 200000000,   // in IDR
        expenses: 550000000, // in IDR
        industry: 'Manufacturing',
        location: 'Bandung',
        services: ['Product Design', 'Fabrication'],
    },
    {
        id: 3,
        name: 'PT MNO',
        revenue: 200000000,  // in IDR
        profit: 50000000,    // in IDR
        expenses: 150000000, // in IDR
        industry: 'Retail',
        location: 'Surabaya',
        services: ['Clothing Retail', 'Online Store'],
    },
    {
        id: 4,
        name: 'PT DEF',
        revenue: 1200000000, // in IDR
        profit: 300000000,   // in IDR
        expenses: 900000000, // in IDR
        industry: 'Finance',
        location: 'Jakarta',
        services: ['Investment', 'Financial Consulting'],
    },
];

// 1. Display all data in table format
console.log("Semua data perusahaan dalam format tabel:");
console.table(companies);

// 2. Get company data by name
const getCompanyByName = (name) => companies.filter(company => company.name === name);
console.log("Data perusahaan dengan Nama 'PT ABC':", getCompanyByName('PT ABC'));

// 3. Get companies by location
const getCompaniesByLocation = (location) => companies.filter(company => company.location === location);
console.log("Data perusahaan di lokasi 'Jakarta':", getCompaniesByLocation('Jakarta'));

// 4. Get companies with revenue >= 500 million IDR
const getCompaniesByRevenue = (revenue) => companies.filter(company => company.revenue >= revenue);
console.log("Data perusahaan dengan pendapatan >= 500 juta IDR:", getCompaniesByRevenue(500000000));

// 5. Get companies by industry
const getCompaniesByIndustry = (industry) => companies.filter(company => company.industry === industry);
console.log("Data perusahaan dengan industri 'Finance':", getCompaniesByIndustry('Finance'));
