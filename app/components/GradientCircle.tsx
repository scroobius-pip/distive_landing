export default () => {
    return <div style={{
        position: 'absolute',
        
        width: '100%',
       height:'100%'
    }}>
        <div style={{
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 10%, rgba(0,212,255,0) 80%) `,
            filter:' contrast(145%) brightness(650%)',
            mixBlendMode: 'screen',
            width: '100%',
            height: '100%',
            opacity: 0.5,
        }} />
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}>
            <svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
            <filter id='noiseFilter'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='0.65'
                    numOctaves='3'
                    stitchTiles='stitch' />
            </filter>

            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
        </div>
        
    </div>
}