module Main where
import Data.List
import System.Console.Haskeline

data Cell = Empty | X | O
  deriving Eq
instance Show Cell where
  show Empty = "-"
  show X = "X"
  show O = "O"
type Row = [Cell]
type Board = [Row]

createEmptyRow::Int -> Row
createEmptyRow y = take y (repeat Empty)

createEmptyBoard::Int -> Int -> Board
createEmptyBoard x y = take y (repeat (createEmptyRow x))

rowToString::Row -> String
rowToString r = intercalate " " (map show r)

showBoard::Board -> String
showBoard b = intercalate "\n" (map rowToString b)

addPlayerToBoard::Int -> Int -> Board -> Board
addPlayerToBoard pX pY (b:bs) = [[if (x==pX && y==pY) then X else val|val<-(b:bs)!!y|x<-[0..length((b:bs)!!y)]]|y<-[0..(length (b:bs) -1)]]

readMove::IO String
readMove = do
  input <- getLine
  if input == "a" 
  	then do
  		putStrLn "bad input"
  		readMove
  	else 
  		return input

main:: IO()
main = runInputT defaultSettings (loop  0 0)
    where 
    loop :: Int -> Int -> InputT IO ()
    loop x y = do
        outputStrLn $ take 100 (repeat '\n')
        outputStrLn $ showBoard (addPlayerToBoard x y $ createEmptyBoard 30 30)
        minput <- getInputChar ""
        case minput of
            Nothing -> return ()
            Just 'q' -> return ()
            Just 'w' -> loop x (y-1)
            Just 'a' -> loop (x-1) y
            Just 's' -> loop x (y+1)
            Just 'd' -> loop (x+1) y
            Just input -> loop x y