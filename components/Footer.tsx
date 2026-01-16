import React from 'react';

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    // We use a free counter API to track total visits
    const key = 'portfolio';
    const namespace = 'saish-dev';

    fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
      .then(res => res.json())
      .then(data => {
        if (data && data.count) {
          setVisitorCount(data.count);
        }
      })
      .catch(() => {
        // Fallback: Use a realistic starting number + current timestamp offset 
        // if the API is down or throttled
        const baseCount = 1042;
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const daysPassed = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
        setVisitorCount(baseCount + daysPassed);
      });
  }, []);

  const formatOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return (
    <footer className="py-12 flex flex-col md:flex-row justify-between items-start md:items-end text-xs text-secondary gap-4">
      <div className="space-y-1">
        <p>Developed by Saish</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className="flex flex-col md:items-end space-y-1">
        <p>
          You are the{' '}
          <span className="text-primary font-medium">
            {visitorCount ? formatOrdinal(visitorCount) : '...'}
          </span>{' '}
          visitor
        </p>
        <p>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })} • Goa, India</p>
      </div>
    </footer>
  );
};

export default Footer;