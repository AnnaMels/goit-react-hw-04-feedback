import PropTypes from "prop-types";
import { Title } from './Statistics.styled';
import { StatisticsList } from './Statistics.styled';
import { StatisticsItem } from './Statistics.styled';
import { ItemText } from './Statistics.styled';
// const shortid = require('shortid');

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {

    return (
        <div>
        <Title>Statistics</Title>
            <StatisticsList>
                <StatisticsItem >
                    <ItemText>Good</ItemText>
                    <span>{good}</span>
                </StatisticsItem>
                <StatisticsItem >
                    <ItemText>Neutral</ItemText>
                    <span>{neutral}</span>
                </StatisticsItem>
                <StatisticsItem >
                    <ItemText>Bad</ItemText>
                    <span>{bad}</span>
                </StatisticsItem>
            </StatisticsList>
            <p>Total: {total()}</p>
            <p>Positive feedback: {positivePercentage()}%</p>
        </div>
    )
}

Statistics.propTypes = {
    feedbackType: PropTypes.exact({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    total: PropTypes.func,
    positivePersantage: PropTypes.number,
}