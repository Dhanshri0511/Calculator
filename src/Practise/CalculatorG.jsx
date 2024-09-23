import { useSelector, useDispatch } from 'react-redux';
import { setValue, clearValue, backSpace, calculate } from '../services/';

export const CalculatorG = () => {
    const val = useSelector((state) => state.calculator.value);
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center mt-44">
            <div className="h-[470px] w-80 bg-slate-300 rounded-3xl flex flex-col justify-end">
                <div className="p-2">
                    <input
                        type="text"
                        className="text-center w-full h-32 text-4xl rounded-t-3xl"
                        value={val}
                        onChange={(e) => dispatch(setValue(e.target.value))}
                    />
                </div>
                <div className="grid grid-cols-4 p-5 gap-3">
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(clearValue())}
                    >
                        AC
                    </button>
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '%'))}
                    >
                        %
                    </button>
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(backSpace())}
                    >
                        Back
                    </button>
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '/'))}
                    >
                        /
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '7'))}
                    >
                        7
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '8'))}
                    >
                        8
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '9'))}
                    >
                        9
                    </button>
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '*'))}
                    >
                        *
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '4'))}
                    >
                        4
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '5'))}
                    >
                        5
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '6'))}
                    >
                        6
                    </button>
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '-'))}
                    >
                        -
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '1'))}
                    >
                        1
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '2'))}
                    >
                        2
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '3'))}
                    >
                        3
                    </button>
                    <button
                        className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '+'))}
                    >
                        +
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '00'))}
                    >
                        00
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '0'))}
                    >
                        0
                    </button>
                    <button
                        className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(setValue(val + '.'))}
                    >
                        .
                    </button>
                    <button
                        className="bg-orange-500 w-12 h-12 rounded-full flex justify-center items-center"
                        onClick={() => dispatch(calculate())}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};
