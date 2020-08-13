/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 * 
 */

export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
    
    const node = document.getElementById(portletElementId);

    Liferay.Loader.require('mapplic-js-portlet@1.0.0/mapplic-plugin/js/jquery.min',
                           'mapplic-js-portlet@1.0.0/mapplic-plugin/js/jquery.mousewheel',
                           'mapplic-js-portlet@1.0.0/mapplic-plugin/js/csvparser',
                           'mapplic-js-portlet@1.0.0/mapplic-plugin/mapplic/mapplic', function (mapplic) {

            var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';

            // Json file from assets folder
            // For some reason we dont have access to json files on src/ folder
            var mapplic = $('#mapplic').mapplic({
                source: `${contextPath}/mall.json`,
                customcss: css,
                sidebar: true,
                height: 500,
                search: true,
                searchdescription: true,
                minimap: false,
                marker: 'hidden',
                fillcolor: false,
                fullscreen: true,
                developer: false,
                thumbholder: true,
                maxscale: 3,
                iconfile: `${contextPath}/css/mapplic/images/icons.svg`
            });

    });

    node.innerHTML =`

        <div class="map-container">
            <div id="mapplic"></div> <!-- Map -->
        </div>

        `;
    
}