import { Inter, Poppins, Manrope } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const popins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});
