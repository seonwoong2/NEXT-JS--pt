export default function NotFound() {
  return (
    <div>
      <h1>{`404 Err`}</h1>
      <div className='err_message'>{`존재하지 않는 URL입니다 다시 확인해 주세요`}</div>
      <style jsx>{`
        .err_message {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
