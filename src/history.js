import sbjs from 'sourcebuster';

const SOURCE_HISTORY_STORAGE_KEY = 'SOURCE_HISTORY';


const getHistory = () => {
  const historyString = window.localStorage.getItem(SOURCE_HISTORY_STORAGE_KEY);
  if (!historyString) {
    return {};
  }
  return JSON.parse(historyString);
};

const setHistory = (history) => {
  window.localStorage.setItem(
    SOURCE_HISTORY_STORAGE_KEY,
    JSON.stringify(history),
  );
};

// eslint-disable-next-line camelcase
const onSourceKnown = ({ current_add, current }) => {
  const history = getHistory();
  const lastTimestamp = current_add.fd;
  if (lastTimestamp in history) return;

  history[current_add.fd] = {
    utm_source: current.src,
    utm_medium: current.mdm,
    utm_campaign: current.cmp,
    utm_term: current.trm,
    utm_content: current.cnt,
    utm_referrer: current_add.rf,
  };
  setHistory(history);
};

const logHistory = () => {
  sbjs.init({
    lifetime: 12, // months
    domain: {
      host: document.location.host,
      isolate: true,
    },
    callback: onSourceKnown,
  });
};


export { logHistory, getHistory };
