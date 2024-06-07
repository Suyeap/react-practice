import {forwardRef} from "react"; // ref 컴포넌트간 전달

// ref 파라미터는 무조건 2번째 인자에 넣는다
const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
        return (
            <dialog ref={ref} className="result-modal"> {/* dialog 태그는 기본적으로 invisible */}
                <h2>YOU {result}</h2>
                <p>The target time was <strong>{targetTime} seconds.</strong></p>
                <p>You stopped the timer with <strong>X seconds left.</strong></p>
                <form method="dialog">
                    {/* form 태그에 method="dialog" button -> 모달 닫기 (브라우저 지원) */}
                    <button>Close</button>
                </form>
            </dialog>
        );
    }
)

export default ResultModal;