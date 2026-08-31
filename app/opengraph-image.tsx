import { ImageResponse } from 'next/og';

export const alt = 'Henok Birhanu — Core Systems & Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #090d16 0%, #0f172a 50%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px 90px',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(99,102,241,0) 70%)',
          }}
        />

        {/* Top bar: Brand initials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '24px',
              color: '#ffffff',
              boxShadow: '0 10px 25px rgba(37,99,235,0.4)',
            }}
          >
            HB
          </div>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: '#94a3b8',
              textTransform: 'uppercase',
            }}
          >
            Henok Birhanu Portfolio
          </span>
        </div>

        {/* Center: Title & Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              fontSize: '58px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #ffffff 0%, #cbd5e1 50%, #93c5fd 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Henok Birhanu
          </div>
          <div
            style={{
              fontSize: '34px',
              fontWeight: 700,
              color: '#60a5fa',
              letterSpacing: '-0.01em',
            }}
          >
            Core Systems & Software Engineer
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#cbd5e1',
              marginTop: '8px',
              maxWidth: '950px',
              lineHeight: 1.4,
            }}
          >
            Enterprise Core Banking • Oracle FLEXCUBE • WebLogic & SOA • Full-Stack Development
          </div>
        </div>

        {/* Bottom tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Core Banking', 'Oracle FLEXCUBE', 'WebLogic', 'REST APIs', 'React', 'Angular', 'TypeScript'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '10px 20px',
                  borderRadius: '12px',
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
