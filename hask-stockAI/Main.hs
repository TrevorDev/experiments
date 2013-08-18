{-# LANGUAGE OverloadedStrings, DeriveGeneric #-}

module Main where
import Data.Time.Calendar
import Data.Map
import Data.Aeson
import Data.Text
import Control.Applicative
import Control.Monad
import qualified Data.ByteString.Lazy as B
import qualified Data.ByteString.Lazy.Char8 as C
import GHC.Generics
import Data.Char (ord)

import qualified Network.HTTP as H (simpleHTTP,getResponseBody,getRequest) 
import qualified Network.URI as U (parseURI,escapeURIString,
                                   isUnescapedInURI) 
import qualified Data.Time.Calendar as T (Day(..),fromGregorian)
import qualified Data.Time.Format as F (formatTime)
import qualified System.Locale as L (defaultTimeLocale)
import qualified Data.Map as M (fromList,Map(..))
import qualified Data.List as D (intersperse)


addition a b = a + b

data StockQuote = 
    StockQuote { name :: !Text 
               , price  :: Int
               } deriving (Show, Generic)

instance FromJSON StockQuote

main :: IO ()
main = do
    let query = "http://query.yahooapis.com/v1/public/yql?q=" ++ "select%20LastTradePriceOnly%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
    rsp <- H.simpleHTTP (H.getRequest query)
    csv <- H.getResponseBody rsp
    let f = C.pack (csv)
    let r = decode("{\"name\":\"Joe\",\"price\":12}") :: Maybe StockQuote;
    let z = addition 67 3
    pr <- price r
    putStrLn ("The result is: " ++ show(pr))
