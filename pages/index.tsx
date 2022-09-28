import type { NextPage } from 'next';
import s from '../styles/pages/about.module.scss';

const About: NextPage = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        Home
                    </li>
                </ul>
            </header>

            <main>
                <section 
                    className={`${s.section_about} border_blue`}
                >
                    <p>This is about page</p>
                </section>
            </main>
        </>
    )
}
export default About;