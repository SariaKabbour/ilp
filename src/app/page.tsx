'use client'

import Link from 'next/link'

interface Class {
    id: string
    title: string
    description: string
    subject: string
    color: string
}

const classes: Class[] = [
    {
        id: 'cst-300',
        title: 'CST 300 - Major ProSeminar',
        description: 'Students learn professional writing, presentation, research, and critical-thinking skills within the diversified fields of computer science and communication design. This class helps students identify and articulate personal, professional, and social goals while practicing problem-solving, collaboration, and community-building skills.',
        subject: 'Seminar',
        color: 'from-indigo-500 to-purple-500'
    },
    {
        id: 'cst-311',
        title: 'CST 311 - Introduction to Computer Networking',
        description: 'A survey of telecommunications and data communications technology fundamentals, network architecture, and protocols. Covers LAN, WAN, TCP/IP, network security, and performance.',
        subject: 'Networking',
        color: 'from-blue-500 to-indigo-500'
    },
    {
        id: 'cst-328',
        title: 'CST 328 - Digital Art and Design',
        description: 'A survey of technology, design, and aesthetic principles as they apply to twenty-first century visual media and digital creativity.',
        subject: 'Digital Art',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'cst-329',
        title: 'CST 329 - Reasoning with Logic',
        description: 'A study of logical reasoning and formal proof techniques as foundations for rigorous thinking in computer science.',
        subject: 'Logic',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        id: 'cst-334',
        title: 'CST 334 - Operating Systems',
        description: 'Learn about the use and design of modern operating systems, focusing on Linux. Master process management, memory management, file systems, and concurrency.',
        subject: 'Operating Systems',
        color: 'from-rose-500 to-pink-500'
    },
    {
        id: 'cst-336',
        title: 'CST 336 - Internet Programming',
        description: 'A hands-on course in dynamic web application development, covering server-side programming, database connectivity, client-side scripting, REST APIs, and responsive design.',
        subject: 'Web Development',
        color: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'cst-338',
        title: 'CST 338 - Software Design',
        description: 'An intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Learn about software development life cycle models, requirements analysis, and GUI development.',
        subject: 'Software Engineering',
        color: 'from-teal-500 to-cyan-500'
    },
    {
        id: 'cst-363',
        title: 'CST 363 - Database Management',
        description: 'Balanced coverage of database use and design, focusing on relational databases. Learn to design relational schemas, write SQL queries, and perform database administration.',
        subject: 'Database',
        color: 'from-orange-500 to-amber-500'
    },
    {
        id: 'cst-370',
        title: 'CST 370 - Algorithms',
        description: 'A study of fundamental algorithm design techniques and essential data structures for solving complex computing problems efficiently.',
        subject: 'Algorithms',
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: 'cst-383',
        title: 'CST 383 - Introduction to Data Science',
        description: 'A practical introduction to data science, covering data preprocessing, machine learning, and visualization using modern statistical programming tools.',
        subject: 'Data Science',
        color: 'from-violet-500 to-purple-500'
    },
    {
        id: 'cst-438',
        title: 'CST 438 - Software Engineering',
        description: 'Prepares students for large-scale software development using software engineering principles, covering the full lifecycle from requirements and design to testing and project management.',
        subject: 'Software Engineering',
        color: 'from-teal-500 to-green-500'
    },
    {
        id: 'cst-462s',
        title: 'CST 462S - Race, Gender, Class in the Digital World',
        description: 'An exploration of race, gender, class, and social justice in relation to technology, combining critical reflection with community-based service learning.',
        subject: 'Social Justice',
        color: 'from-fuchsia-500 to-pink-500'
    },
    {
        id: 'cst-489',
        title: 'CST 489 - Capstone Project Planning',
        description: 'Students design a detailed proposal for a professional-level capstone project, developing industry-ready skills in project planning, collaboration, and technical writing.',
        subject: 'Capstone',
        color: 'from-slate-500 to-slate-400'
    },
]

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Saria Kabbour ILP Portfolio
                    </h1>
                    <div className="flex gap-6">

                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Welcome to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My CSUMB Portfolio</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Hello! My name is Saria, I am currently pursuing a Bachelor&apos;s degree in Computer Science at California State University, Monterey Bay, with an expected graduation date of Spring 2026.
                    </p>
                </div>
            </section>

            {/* Classes Grid */}
            <section className="pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center text-slate-100">Available Classes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {classes.map((course) => (
                            <Link key={course.id} href={`/class/${course.id}`}>
                                <div className="group cursor-pointer h-full">
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                                        {/* Gradient accent */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity`} />

                                        <div className="relative z-10">
                                            <div className={`inline-block px-3 py-1 bg-gradient-to-r ${course.color} bg-clip-text text-transparent text-sm font-semibold mb-4`}>
                                                {course.subject}
                                            </div>

                                            <h4 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition">
                                                {course.title}
                                            </h4>

                                            <p className="text-slate-400 mb-6 leading-relaxed">
                                                {course.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                                                View Course
                                                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-700/50 py-8 px-6">
                <div className="max-w-6xl mx-auto text-center text-slate-400">
                    <img src="/logo.svg" alt="CSUMB Logo" className="h-18 mx-auto mb-4 opacity-70" />
                    <p>&copy; 2024 My Classes. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
