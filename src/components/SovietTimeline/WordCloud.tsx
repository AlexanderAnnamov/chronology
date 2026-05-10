import { TagCloud } from "react-tagcloud";
import './worldcloud.css';

type WordCloudProps = {
  words: string[];
  color: string;
};

type Tag = {
  value: string;
  count: number;
};

function WordCloud({ words, color }: WordCloudProps) {
  const tags: Tag[] = words.map((word, index) => ({
    value: word,
    count: getWordWeight(index),
  }));

  return (
    <div className="wordCloud" style={{ color, width: 400 }}>
      <TagCloud
        style={{height: 200}}
        minSize={12}
        maxSize={32}
        tags={tags}
        renderer={(tag, size) => (
          <span
            key={tag.value}
            style={{
              fontSize: size,
              color:  color,
              opacity: 0.55 + ((tag.count % 5) * 0.11),
              fontWeight: tag.count >= 80 ? 700 : 500,
              margin: "6px 10px",
              display: "inline-block",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            {tag.value}
          </span>
        )}
      />
    </div>
  );
}

function getWordWeight(index: number) {
  if (index === 0) return 100;
  if (index === 1) return 90;
  if (index === 2) return 80;
  if (index < 7) return 55;
  if (index < 12) return 35;

  return 20;
}

export default WordCloud;