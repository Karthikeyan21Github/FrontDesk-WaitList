const Toggle = () => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
          stroke="#64748B"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 2V14"
          stroke="#64748B"
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="8" y="2" width="6" height="12" rx="1" fill="#64748B" />
      </svg>
    </>
  );
};

export default Toggle;
