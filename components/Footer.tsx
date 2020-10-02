import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <div className="footer__container">
            <div className="footer__links">
                <Link href="/"><a>Hubungi Kami</a></Link> | <Link href="/"><a>Tentang</a></Link>
            </div>
            <h4>Klinflow 2020</h4>
        </div>
    )
}
