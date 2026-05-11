import React from "react";
import "../css/Tips.css";

const tipsData = [
  {
    category: "Skincare",
    tips: [
      {
        icon: "✨",
        title: "Sunscreen Daily",
        description:
          "Always apply SPF 30+ even when it’s cloudy or indoors near windows.",
      },
      {
        icon: "🧼",
        title: "Don’t Overwash",
        description:
          "Wash your face only twice a day to avoid stripping natural oils.",
      },
      {
        icon: "🧴",
        title: "Moisturize Properly",
        description:
          "Apply moisturizer while your skin is still damp for better hydration.",
      },
      {
        icon: "🚫",
        title: "Avoid Touching Face",
        description:
          "Hands carry bacteria that can cause acne and irritation.",
      },
      {
        icon: "🛏️",
        title: "Clean Pillowcases",
        description:
          "Change pillowcases 2–3 times a week to prevent breakouts.",
      },
    ],
  },

  {
    category: "Oral Health",
    tips: [
      {
        icon: "🦷",
        title: "Brush Properly",
        description:
          "Brush for 2 minutes, twice daily, using gentle circular motions.",
      },
      {
        icon: "👅",
        title: "Clean Your Tongue",
        description:
          "Removes bacteria that cause bad breath and improves oral hygiene.",
      },
      {
        icon: "🪥",
        title: "Replace Toothbrush",
        description:
          "Change your toothbrush every 3 months or after illness.",
      },
      {
        icon: "🚫",
        title: "Reduce Sugar",
        description:
          "Too much sugar increases risk of cavities and gum disease.",
      },
      {
        icon: "🧂",
        title: "Salt Water Rinse",
        description:
          "Helps reduce gum swelling and improves oral healing.",
      },
    ],
  },

  {
    category: "Lifestyle",
    tips: [
      {
        icon: "💧",
        title: "Drink Water",
        description:
          "At least 2 liters daily for glowing skin and detoxification.",
      },
      {
        icon: "😴",
        title: "Sleep Well",
        description:
          "7–9 hours of sleep helps skin repair and reduces dark circles.",
      },
      {
        icon: "🚶",
        title: "Stay Active",
        description:
          "Exercise improves blood flow and gives your skin a natural glow.",
      },
      {
        icon: "📵",
        title: "Reduce Screen Time",
        description:
          "Too much screen time can affect sleep and skin health.",
      },
    ],
  },

  {
    category: "Nutrition",
    tips: [
      {
        icon: "🥗",
        title: "Eat Healthy Foods",
        description:
          "Fruits and vegetables help improve skin texture and glow.",
      },
      {
        icon: "🥑",
        title: "Healthy Fats",
        description:
          "Avocados and nuts help maintain soft and elastic skin.",
      },
      {
        icon: "🍋",
        title: "Vitamin C Boost",
        description:
          "Helps brighten skin and supports collagen production.",
      },
      {
        icon: "🍫",
        title: "Limit Junk Food",
        description:
          "Greasy foods can trigger acne and skin inflammation.",
      },
    ],
  },
];

const Tips = () => {
  return (
    <div className="tips-page">

      {/* HERO SECTION */}
      <div className="tips-header">
        <div className="overlay"></div>

        <h1>Health & Beauty Tips</h1>

        <p>
          Discover expert-backed skincare, oral health, nutrition,
          and wellness tips for a healthier lifestyle ✨
        </p>
      </div>

      {/* TIPS */}
      <div className="tips-container">

        {tipsData.map((section, index) => (
          <div key={index} className="tips-section">

            <h2 className="section-title">{section.category}</h2>

            <div className="tips-grid">

              {section.tips.map((tip, i) => (
                <div className="tip-card" key={i}>

                  <div className="tip-icon">
                    {tip.icon}
                  </div>

                  <h3>{tip.title}</h3>

                  <p>{tip.description}</p>

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Tips;