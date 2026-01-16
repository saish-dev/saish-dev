import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../styles/heatmap.css';
import { PROFILE_DATA } from '../constants';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const GithubActivity: React.FC = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = PROFILE_DATA.githubUsername;
        if (!username) throw new Error("GitHub username not configured");

        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!response.ok) throw new Error('Failed to fetch contributions');

        const data = await response.json();
        const contributionsData: Contribution[] = data.contributions || [];
        setTotalContributions(data.total?.lastYear || contributionsData.reduce((acc: number, curr: Contribution) => acc + curr.count, 0));
        setContributions(contributionsData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchGithubData();
  }, []);

  // Map the level to our custom CSS classes
  const getClassName = (value: any) => {
    if (!value) return 'color-github-0';
    return `color-github-${value.level}`;
  };

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  return (
    <section className="py-12 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-serif italic text-primary">Github Activity</h2>
      </div>

      <div className="border border-border rounded-xl p-6 bg-surface sm:p-8 shadow-sm">
        <div className="w-full overflow-hidden">
          {loading ? (
            <div className="h-[140px] flex items-center justify-center text-secondary text-sm bg-muted rounded-md border border-border">
              Loading activity...
            </div>
          ) : error ? (
            <div className="h-[140px] flex items-center justify-center text-secondary text-sm bg-muted rounded-md border border-border">
              {error}
            </div>
          ) : (
            <CalendarHeatmap
              startDate={oneYearAgo}
              endDate={today}
              values={contributions}
              classForValue={getClassName}
              showWeekdayLabels={false}
              tooltipDataAttrs={(value: any) => {
                if (!value || !value.date) return null;
                return {
                  'data-tip': `${value.date}: ${value.count} contributions`,
                };
              }}
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4 border-t border-border pt-6 px-1">
          <div className="text-secondary text-sm">
            {!loading && !error && (
              <p>
                <span className="text-primary font-medium">{totalContributions.toLocaleString()}</span> contributions in the last year
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-secondary">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3, 4].map(level => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-[2px] color-github-${level} heatmap-legend-item shadow-sm border border-white/5`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      <style>{`
        .heatmap-legend-item.color-github-0 { background-color: var(--gh-level-0); }
        .heatmap-legend-item.color-github-1 { background-color: var(--gh-level-1); }
        .heatmap-legend-item.color-github-2 { background-color: var(--gh-level-2); }
        .heatmap-legend-item.color-github-3 { background-color: var(--gh-level-3); }
        .heatmap-legend-item.color-github-4 { background-color: var(--gh-level-4); }
      `}</style>
    </section>
  );
};

export default GithubActivity;