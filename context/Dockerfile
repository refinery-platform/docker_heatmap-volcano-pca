FROM python:2.7.13-alpine

WORKDIR /var/www
COPY . .
# TODO: Files which will not be served do not belong here.
RUN pip install -r requirements.txt

# TODO
#RUN groupadd -r www && useradd -r -g www www
#RUN chown www:www .
#USER www

ENV GIT_BASE=https://raw.githubusercontent.com
RUN python -m wget $GIT_BASE/refinery-platform/heatmap-volcano-pca/master/src/heatmap_scatterplot.js

ENV CDN_BASE=https://cdnjs.cloudflare.com/ajax/libs
RUN python -m wget $CDN_BASE/d3/4.7.3/d3.min.js
RUN python -m wget $CDN_BASE/require.js/2.3.3/require.min.js

VOLUME data

CMD ["python", "on_startup.py"]
